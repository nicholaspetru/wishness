class PodParticipant < ApplicationRecord
  belongs_to :pod
  belongs_to :participant
end
