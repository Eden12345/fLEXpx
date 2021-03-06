Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :photos, only: [:create, :index, :show]
    resources :follows, only: [:create, :destroy]
    match "/search/photos", to: "photos#search", via: [:get]
    match "/search/users", to: "users#search", via: [:get]
  end
end
