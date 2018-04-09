class Api::UsersController < ApplicationController
  def index
    @users = User.all
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login_user(@user)
      render "/api/users/_user.json.jbuilder"
    elsif User.find_by(username: @user.username) != nil
      render json: ["This username has already been taken"], status: 404
    elsif @user.password.length < 6
      render json: ["Your password must be at least 6 characters"], status: 404
    else
      render json: ["You need to provide a username and a password"], status: 404
    end
  end

  def show
    @user = User.find(params[:id])

    render "/api/users/show.json.jbuilder"
  end

  def update
    @user = User.find(params[:id])

    if current_user == @user
      @user.update(user_params)
      render "/api/users/_user.json.jbuilder"
    else
      render json: ["How did you try and even edit this profile?"], status: 404
    end
  end

  def search
    @users = User.where("username ILIKE ?", "%#{params[:search_text]}%").all

    render "/api/users/search.json.jbuilder"
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :banner_photo_id, :profile_photo_id)
  end
end
