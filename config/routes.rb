Hugegif::Application.routes.draw do
  root :to => 'main#index'
  get '/new', to: 'main#new'
  post '/create', to: 'main#create'
  get '/clear', to: 'main#clear'
  get '/:token', to: 'main#show'
end
