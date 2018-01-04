class Photo < ApplicationRecord
  validates :title, presence: true
  validates :uploader_id, presence: true

  has_attached_file :image
  validates_attachment_presence :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :uploader,
    class_name: :User,
    foreign_key: :uploader_id,
    primary_key: :id
end
