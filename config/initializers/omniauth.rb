Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, "164511713630664", "3770bba22514c8ab668d84499fdfad77"
end