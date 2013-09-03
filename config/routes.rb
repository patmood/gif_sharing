Hugegif::Application.routes.draw do
  root :to => 'main#index'

  resources :gifs
end
