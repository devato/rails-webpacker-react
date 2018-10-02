Rails.application.routes.draw do

  # should come before public root
  authenticated :user do
    root 'app/dashboard#index'
  end

  root 'pages#home'
  devise_for :users
end
