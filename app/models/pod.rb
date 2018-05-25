class Pod < ApplicationRecord
  has_many :pod_participants
  has_many :participants, through: :pod_participants
  has_many :wishlists
  has_many :participants, through: :wishlists
end
