photos = @photos if @photos

json.photos photos.each do |photo|
  json.extract! photo, :title, :id
  json.photo_thumb photo.image.url(:thumb)
end
