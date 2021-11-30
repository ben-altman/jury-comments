class Repertoire < ApplicationRecord
  belongs_to :jury

  accepts_nested_attributes_for :jury, :reject_if => proc { |a| a[:name].blank? }
end
