class Jury < ApplicationRecord
    validates :name, presence: true
    validates :instrument, presence: true

    has_many :comments, dependent: :destroy
    has_many :repertoires, dependent: :destroy

    accepts_nested_attributes_for :comments, :reject_if => proc { |a| a[:content].blank? }
    accepts_nested_attributes_for :repertoires, :reject_if => proc { |a| a[:title].blank? }

end
