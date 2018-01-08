photo = @photo if @photo

json.set! photo.id do
  json.extract! photo, :title, :id, :uploader_id
  json.large photo.image.url
  json.avatar photo.image.url(:avatar)
  json.thumb photo.image.url(:thumb)
end
