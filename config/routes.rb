Rails.application.routes.draw do
  devise_for :users, :controllers => {sessions: 'users/sessions', registrations: 'users/registrations'}
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  get '*path', to: 'static_pages#root'
end
