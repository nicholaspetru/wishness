class Participant < ApplicationRecord
  validates :name, :email, presence: true
  validates :email, uniqueness: true
  
  has_many :pod_participants
  has_many :pods, through: :pod_participants
  has_many :wishlists
  has_many :pods, through: :wishlists
end
