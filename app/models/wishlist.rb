class Wishlist < ApplicationRecord
  belongs_to :pod
  belongs_to :participant
  belongs_to :wish
end
