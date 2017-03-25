class Api::SubjectsController < ApplicationController

  def create
    @subject = Subject.new(subject_params)
    if @subject.save
      render :show
    else
      render json: @subject.errors.full_messages, status: 422
    end
  end

  def update
    @subject = Subject.find(params[:id])
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
    @subject = Subject.find(params[:id])
  end

  def index
    @subjects = Subject.all
    render :index
  end

  def subject_params
    params.require(:subject).permit(:user_id, :title)
  end
end
