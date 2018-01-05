photos = @photos if @photos

photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :title, :id
    json.photo_thumb photo.image.url(:thumb)
  end
end
