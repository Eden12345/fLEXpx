class Api::PhotosController < ApplicationController

  def create
    @photo = Photo.new(photo_params)

    if current_user
      @photo.uploader_id = current_user.id

      if @photo.save
        render "/api/photos/show.json.jbuilder"
      else
        render json: ["(You need to provide a title and use a valid image format)"], status: 406
      end

    else
      render json: ["You must be signed in to upload a photo"], status: 403
    end
  end

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

  def search
    @photos = Photo.where("title ILIKE ?", "%#{params[:search_text]}%").all

    render "/api/photos/search.json.jbuilder"
  end

  private

  def photo_params
    params.require(:photo).permit(:title, :image)
  end
end
