class Api::PhotosController < ApplicationController

  def index
    if params[:user_id]
      @photos = Photo.where(uploader_id: params[:user_id])
    else
      @photos = Photo.all
    end
  end

  def show
    @photo = Photo.find(params[:id])
  end


end
