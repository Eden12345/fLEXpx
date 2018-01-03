class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      render "/api/users/_user.json.jbuilder"
    elsif User.find_by(username: @user.username) != nil
      render json: ["This username has already been taken"], status: 404
    else
      render json: ["You need to provide a username and a password"], status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
