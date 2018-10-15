Rails.application.routes.draw do

  # should come before public root
  authenticated :user do
    root 'app/dashboard#index'
    resources :posts, constraints: lambda { |req| req.format == :json }
    match "*path", to: 'app/dashboard#index', via: :get
  end

  root 'pages#home'
  devise_for :users
end
