class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login_user(@user)
      render "/api/users/_user.json.jbuilder"
    else
      render json: ["Invalid username and/or password"], status: 401
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: ["There is no logged in user to log out"], status: 404
    end
  end
end
