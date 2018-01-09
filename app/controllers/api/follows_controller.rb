class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(followee_id: params[:followeeId])

    if current_user
      @follow.follower_id = current_user.id
      @follow.save!
      @user = current_user
      render "/api/users/_user.json.jbuilder"
    else
      render json: ["You are not signed in, or the user you're trying to follow does not exist"], status: 404
    end
  end

  def destroy
    @follow = Follow.find_by({followee_id: params[:id], follower_id: current_user.id})

    if @follow
      @follow.destroy
      @user = current_user
      render "/api/users/_user.json.jbuilder"
    else
      render json: ["You cannot unfollow"], status: 404
    end
  end
end
