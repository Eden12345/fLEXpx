photos = @photos if @photos

json.array! photos.each do |photo|
  json.extract! photo, :title, :id, :uploader_id
  json.large photo.image.url(:large)
  json.medium photo.image.url(:medium)
end
