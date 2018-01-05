photos = @photos if @photos

json.photos photos.each do |photo|
  json.extract! photo, :title
  json.photo_thumb photo.image.url(:thumb)
end
