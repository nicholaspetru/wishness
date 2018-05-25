Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :participants
      resources :pods
      resources :pod_participants
      resources :wishes
      resources :wishlists
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
