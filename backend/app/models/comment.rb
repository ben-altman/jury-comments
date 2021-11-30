class Comment < ApplicationRecord
  validates :content, presence: true
  validates :score, presence: true
  validates :score, numericality: { in: 0..10 }

  belongs_to :jury
end
