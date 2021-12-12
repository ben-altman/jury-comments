Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :juries, only: [:index, :create]
    end
  end
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/test', to: 'application#test'
end

# Rails.application.routes.draw do
#   namespace :api do
#     namespace :v1 do
#       resources :syllabuses, only: [:index]
#     end
#   end
# end

# resources :juries do
#   resources :repertoires
#   resources :comments
# end