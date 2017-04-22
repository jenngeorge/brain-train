class Api::SubjectFollowsController < ApplicationController
  def create
    @subject_follow = SubjectFollow.new(subject_follows_params)
    @subject_follow.user_id = current_user.id

    if @subject_follow.save
      @subject = @subject_follow.subject
      render 'api/subjects/show'
    else
      render json: @subject_follow.errors.full_messages, status: 422
    end
  end

  def destroy
    subject_follow = SubjectFollow
      .find_by(subject_id: params[:id], user_id: current_user.id)

    if subject_follow.destroy
      @subject = subject_follow.subject
      render 'api/subjects/show'
    else
      render json: @subject_follow.errors.full_messages, status: 422
    end
  end

  def subject_follows_params
    params.require(:subject_follow).permit(:subject_id)
  end
end
