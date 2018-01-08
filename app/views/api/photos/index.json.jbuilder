photos = @photos if @photos

photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :title, :id, :uploader_id
    json.thumb photo.image.url(:thumb)
    json.large photo.image.url
    json.avatar photo.image.url(:avatar)
  end
end
