Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :pods do
        resources :pod_participants
      end
      resources :participants do
        resources :wishlists do
          resources :wishes
        end
      end
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
