class Jury < ApplicationRecord
    has_many :comments
    has_many :repertoires
end
