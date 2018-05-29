class Wishlist < ApplicationRecord
  belongs_to :pod
  belongs_to :participant
  has_many :wish
end
