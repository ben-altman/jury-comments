Rails.application.routes.draw do
  resources :repertoires
  resources :comments
  resources :juries
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
