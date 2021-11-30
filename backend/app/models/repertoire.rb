class Repertoire < ApplicationRecord
  validates :composer, presence: true
  validates :title, presence: true

  belongs_to :jury

end
