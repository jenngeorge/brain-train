class Users::SessionsController < Devise::SessionsController
# before_action :configure_sign_in_params, only: [:create]
respond_to :json

  # GET /resource/sign_in

  # POST /resource/sign_in

  def create
    if User.find_by(email: params[:user][:email]) == nil
      render json: {Unauthorized:
        ["There are no users with email #{params[:user][:email]}"]},
        status: 401
      return
    end
    resource = warden.authenticate!(auth_options)
    set_flash_message(:notice, :signed_in) if is_navigational_format?
    sign_in(resource_name, resource)
    render json: resource.to_json
  end

  # DELETE /resource/sign_out
  # def destroy
  #   # super
  # end

  # GET /resource/sign_in


  # POST /resource/sign_in



  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end

  def current
    @user = current_user
    render 'api/users/show'
  end

end
