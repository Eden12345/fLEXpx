class Photo < ApplicationRecord
  validates :title, presence: true
  validates :uploader_id, presence: true

  belongs_to :uploader,
    class_name: :User,
    foreign_key: :uploader_id,
    primary_key: :id
end
