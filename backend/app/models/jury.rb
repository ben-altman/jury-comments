class Jury < ApplicationRecord
    has_many :comments
    has_many :repertoires

    accepts_nested_attributes_for :comment, :reject_if => proc { |a| a[:content].blank? }
    accepts_nested_attributes_for :repertore, :reject_if => proc { |a| a[:title].blank? }

end
