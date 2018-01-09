class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(followee_id: params[:followee_id])

    if current_user
      @follow.follower_id = current_user.save!
      render "/api/users/_user.json.jbuilder"
    else
      render json: ["You are not signed in, or the user you're trying to follow does not exist"], status: 404
    end
  end

  def destroy
    @follow = Follow.new(followee_id: params[:followee_id])

    # Follow.where({followee_id: id, follower_id: id})
  end
end
