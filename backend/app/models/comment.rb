class Comment < ApplicationRecord
  validates :content, presence: :true
  
  belongs_to :jury
end
