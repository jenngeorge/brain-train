class Api::SubjectsController < ApplicationController

  def create
    @subject = Subject.new(subject_params)
    if @subject.save!
      SubjectFollow.create!(subject_id: @subject.id, user_id: subject_params["user_id"])
      render :show
    else
      render json: @subject.errors.full_messages, status: 422
    end
  end

  def update
    @subject = Subject.includes(:subject_follows).find(params[:id])
    if @subject.update_attributes(subject_params)
      render :show
    else
      render json: @subject.errors.full_messages, status: 422
    end
  end

  def destroy
    @subject = Subject.find(params[:id])
    @subject = @subject.destroy

    render :show
  end

  def show
    @subject = Subject.includes(:decks, :subject_follows).find(params[:id])
  end

  def index
    if params[:search]
      match = params[:search].downcase
      @subjects = Subject.includes(:decks, :subject_follows)
        .where("LOWER(title) LIKE ?
        OR LOWER(title) LIKE ?
        OR LOWER(title) LIKE ?",
        "%#{match}%", "#{match}%", "%#{match}")
    else
      if current_user.followed_subjects
        @subjects = current_user.followed_subjects.includes(:decks, :subject_follows)
      else
        @subjects = Subject.first
        # TODO: make this better ^ what if a user follows no subjects
      end
    end

    render :index
  end

  def subject_params
    params.require(:subject).permit(:user_id, :title)
  end
end
