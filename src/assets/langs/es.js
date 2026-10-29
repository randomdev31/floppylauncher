const strings = {
  salutate: "¡Hola!",
  checking_connection: "Comprobando conexión a internet",
  no_connection:
    "No se ha podido conectar a internet.<br>Entrando en modo offline",
  starting_battly: "Iniciando Floppy",
  checking_updates: "Comprobando actualizaciones",
  error_checking_updates:
    "Error al buscar las actualizaciones. El servidor no responde. Inténtalo de nuevo más tarde.",
  error_connecting_server: "Error al conectar al servidor de Floppy",
  getting_actual_version: "Obteniendo versión actual",
  downloading_update: "Descargando actualización",
  update_available: "¡Actualización disponible!",
  update_downloaded: "Actualización descargada",
  update_cancelled: "Actualización cancelada",
  update_completed:
    "Actualización descargada. Ahora se te abrirá el instalador de Floppy",
  update_error: "Error al buscar las actualizaciones, error :<br>",
  errkr_connecting_server:
    "Error al conectar al servidor.<br>Comprueba tu conexión o vuelve a intentarlo más tarde.",
  closing_countdown: "Cerrando en",
  starting_launcher: "Iniciando Floppy",
  ending: "Ya casi estamos",
  close: "Cerrar",

  instances: "Instancias",
  welcome_instances:
    "👋 Bienvenido/a al nuevo panel de instancias de Floppy. Aquí podrás gestionar las instancias que usarás en Floppy para tus versiones.",
  open_instance: "Abrir",
  open_instance_folder: "Abrir carpeta",
  delete_instance: "Eliminar",
  create_instance: "Crear instancia",
  edit_instance: "Editar instancia",
  save_instance: "Guardar instancia",
  instance_name: "Nombre de la instancia",
  instance_description: "Descripción de la instancia",
  instance_image: "Imagen de la instancia",
  instance_version: "Versión de la instancia",
  instance_version2:
    "Editar la versión de tu instancia puede causar problemas (y más cuando son modpacks), asegúrate de que la versión sea compatible con los mods que tienes instalados.",
  instance_deleted_correctly: "Se ha eliminado la instancia correctamente.",
  instance_saved_correctly: "Se ha guardado la instancia correctamente.",
  preparing_instance: "Preparando instancia",
  downloading_instance: "Descargando instancia",
  downloading_version: "Descargando versión",
  downloading_loader: "Descargando Loader",
  downloading_java: "Descargando Java",
  checking_instance: "Comrpobando",
  downloading_assets: "Descargando assets",
  instance_created_correctly: "Se ha creado la instancia correctamente.",
  fill_all_fields: "Necesitas rellenar todos los campos.",
  calculating_time: "Calculando tiempo",
  estimated_time_not_available: "Tiempo estimado no disponible",
  remaining: "Quedan",
  remaining_two: "Queda",
  checking_java: "Comprobando Java",
  checking_assets: "Comprobando assets",
  installing_java: "Instalando Java",
  folder_opened: "Carpeta abierta correctamente",
  battly_folder_opened: "Carpeta de Floppy abierta correctamente",

  are_you_sure: "¿Estás seguro/a?",
  are_you_sure_text: "Esta acción no se puede deshacer.",
  yes_delete: "Sí, eliminar",
  no_cancel: "No, cancelar",

  playing_in: "Jugando en",
  in_the_menu: "En el menú de inicio",

  minecraft_started_correctly: "Minecraft iniciado correctamente",
  minecraft_started_correctly_body: "Minecraft se ha iniciado correctamente.",

  name: "Nombre",
  description: "Descripción",
  select_a_file: "Selecciona un archivo",

  version_list_updated: "Se ha actualizado la lista de versiones.",

  download: "Descargar",
  play: "Jugar",

  news_battly: "Últimas novedades de Floppy",
  status_battly: "Estado de Floppy",
  playing_now_text: "Reproduciendo ahora",
  playing_now_body: "Nada reproduciéndose",
  users_online: "Usuarios en línea",
  operative: "Operativo",
  maintenance: "Mantenimiento",
  no_connected: "No operativo - No conectado",
  ads_text: "Anuncios",

  /* settings */

  accounts_btn: "Cuentas",
  java_btn: "Java",
  ram_btn: "RAM",
  launcher_btn: "Launcher",
  theme_btn: "Tema",
  background_btn: "Fondo",
  save_btn: "Guardar",
  account_information: "Información de la cuenta",
  mc_id_text: "ID de MC:",
  showskin_userinfo_btn: "Mostrar Skin",
  deleteaccount_userinfo_btn: "Eliminar cuenta",
  set_skin: "Establecer skin",
  my_accounts: "Mis cuentas",
  add_account_text: "Añadir cuenta",
  java_settings: "Ajustes de Java",
  java_text_info: `<span style="font-size: 30px; font-weight: 700;">Java</span><br><br>En este apartado podrás
                    configurar la versión de Java que se usará para iniciar tu juego. Si no sabes lo que estás haciendo,
                    no toques nada de este apartado.<br><br>
                    <b>Ruta de Java</b>
                    <br>
                    <span>
                        Floppy utiliza una versión integrada de Java [Oficial].<br>`,
  java_text_info2: `
                        Esta versión está disponible en la ruta
                        Sin embargo, puedes especificar tu propio ejecutable si tu versión requiere una versión
                        diferente de Java.
                    </span>
                    `,
  ram_settings: "Ajustes de la RAM",
  ram_text_info: `En este aparado podrás configurar
                    la RAM que se le asignará a tu juego. Esto es importante para que tu juego funcione correctamente.
                    Si no sabes lo que estás haciendo, no toques nada de este apartado.<br><br>
                    <b>RAM máxima:</b> Indica la cantidad total de RAM asignada a tu juego. Se recomienda que no excedas
                    el 50% de la cantidad total de RAM presente en tu PC para que funcione correctamente. Si la PC tiene
                    más de 8GB de RAM, se recomienda asignarle 3GB. Si la PC tiene 4 GB o menos, no asignes más de 2
                    GB.<br><br>
                    <b>RAM mínima:</b> Indica la cantidad mínima de RAM asignada al iniciar tu juego. Se recomienda no
                    poner más de 3GB para este valor. El valor típico es de 1 GB.`,
  you_have_a_total: "Tienes un total de",
  of_ram: "de RAM",
  of_ram_disponible: "de RAM disponible",
  battly_settings: "Configuración de Floppy",
  battly_settings_information: `<span style="font-size: 30px; font-weight: 700;">Inicio de Minecraft</span><br><br>En este apartado
                    podrás configurar la acción que realizará Floppy al abrir Minecraft entre más ajustes generales.<br><br>
                    <b style="font-size: 20px;">Qué hacer al abrir Minecraft:</b>
                    <br>`,
  minimalize_battly: "Ocultar Floppy después de iniciar Minecraft",
  music_settings_information: "Música",
  minimize_music: "Ocultar el panel de música después de iniciar Minecraft",
  keep_music_opened:
    "Mantener el panel de música abierto después de iniciar Minecraft",
  keep_battly_opened: "Mantener Floppy abierto después de iniciar Minecraft",
  battly_logs_text: "Registros de Floppy:",
  get_socketid: "Obtener ID única",
  battly_theme: "Personalizar Floppy",
  welcome: "¡Bienvenido/a!",
  battly_theme_text:
    "¡Bienvenido/a al nuevo panel de personalización de Floppy! Aquí podrás personalizar Floppy a tu gusto, cambiando el tema, las imágenes de fondo y mucho más. ¡Esperamos que te guste!",
  change_theme_text: "Ajustar el tema",
  buttons_color: "Color de los botones",
  bottom_bar_text: "Color de la barra inferior",
  bottom_bar_opacity: "Transparencia de la barra inferior",
  background_loading_screen_color_text:
    "Color de la pantalla de carga",
  starting_music: "Sonido de inicio",
  resize_image_text: "Recortar imagen",
  set_background_text: "Establecer fondo",
  cancel: "Cancelar",
  customize_background: "Personalizar fondo",
  resize_background: "Ajustar el fondo",
  background_image_text: "Imagen de fondo",
  reset_background: "Restablecer fondo",
  select_a_background: "Selecciona una imagen",
  background_set_successfully: "El fondo se ha restablecido correctamente",
  account_deleted_successfully: "Se ha eliminado la cuenta correctamente",
  settings_saved_successfully: "La configuración se ha guardado correctamente",
  java_path_didnt_set: "Ruta de java no establecida",
  java_path_set_successfully: "La ruta de java se ha establecido correctamente",
  the_file_name_java: "El nombre del archivo debe ser java o javaw",
  java_path_reset_successfully:
    "La ruta de java se ha restablecido correctamente",
  you_are_premium_background:
    "Ya que eres premium, ahora podrás elegir si subir una imagen estática o animada para tu fondo de Floppy.",
  select_a_type_background: "Elige qué fondo quieres establecer",
  uuid_copied_correctly: "Se ha copiado el UUID correctamente",

  /* loading */
  loading_config: "Cargando configuración",
  config_loaded: "Configuración cargada",
  error_loading_config: "Error al cargar la configuración",
  loading_versions: "Cargando versiones",
  versions_loaded: "Versiones cargadas",
  error_loading_versions: "Error al cargar las versiones",
  loading_minecraft_versions: "Cargando versiones de Minecraft",
  minecraft_versions_loaded: "Versiones de Minecraft cargadas",
  error_loading_minecraft_versions:
    "Error al cargar las versiones de Minecraft",
  static_background_text: "Fondo estático (imagen)",
  animated_background_text: "Fondo animado (vídeo)",

  /* inicio */
  download_version: "Descargar versión",
  mojang_copyright:
    "Todas las versiones son las oficiales sin modificaciones. Las versiones modificadas ya sean de Fabric, Forge, Quilt u OptiFine son creadas por la comunidad y no por Mojang. Todos los derechos reservados a Mojang Studios.",
  delete_version: "Eliminar versión",
  type_of_version: "Tipo de versión",
  no_accounts: "No has iniciado sesión para jugar",
  no_accounts_text: "Añade una cuenta para jugar. Presiona ⚙️ > Añadir cuenta",

  latest: "Última",
  recommended: "Recomendada",

  version_deleted_correctly: "Versión eliminada correctamente.",
  you_need_select_version: "Necesitas seleccionar una versión.",

  downloading_client: "Descargando cliente",
  starting_download_client_can_take:
    "Iniciando instalación del cliente... Puede tardar un poco...",
  battly_log: "Registro de Floppy",
  save_logs: "Guardar registros",

  downloading: "Descargando",
  downloading_files: "Descargando archivos",
  downloading_file: "Descargando archivo",
  downloading_librairies: "Descargando librerías",
  downloading_natives: "Descargando nativos",
  installing_loader: "Instalando Loader",
  extracting_loader: "Extrayendo Loader",
  downloading_files_completed: "Descargando archivos... Completado",
  downloading_files_completed_installing_dependencies:
    "Descarga de archivos completada. Instalando dependencias",
  opening_optifine: "Abriendo OptiFine",
  downloading_json_files: "Descargando archivos JSON",
  downloading_minecraft_files: "Descargando archivos de Minecraft",
  creating_folder: "Creando carpeta",
  folder: "Carpeta",
  created_successfully: "creada correctamente",
  downloaded_successfully: "Descargado correctamente",
  the_folder: "La carpeta",
  already_exists: "ya existe",
  downloading_jar_file_of: "Descargando archivo JAR de",
  downloading_jar_file: "Descargando archivo JAR",
  jar_file_of: "Archivo JAR de",
  skipping: "Saltando",
  starting_minecraft: "Iniciando Minecraft",
  error_downloading: "Error al descargar",
  status: "Estado",
  error_http: "Error en la solicitud HTTP",
  extracting: "Extrayendo",
  progress: "Progreso",
  files_extracted_successfully: "Archivos extracted correctamente",
  deleting_temp_files: "Eliminando archivos temporales",
  temp_files_deleted_successfully:
    "Archivos temporales eliminados correctamente",
  error_downloading_version: "Error al descargar la versión",
  version_java_error_title: "No puedes jugar versiones externas",
  version_java_error:
    "Para jugarlas, descarga la 1.20.1 de vanilla para que se configure Java.",
  download_the_version_in_vanilla: "Descarga la versión en Vanilla",
  download_the_version_in_vanilla_text:
    "Para poder jugar esta versión, necesitas descargarla en Vanilla para que se configure Java automáticamente.",
  installing_minecraft_files: "Instalando archivos de Minecraft",
  client_files_downloaded_successfully: "Archivos del cliente completados",
  you_dont_have_friends_1: "No tienes amigos...😔 ¡Añade a alguien!",
  you_dont_have_friends_2: "No tienes amigos, pídele a alguien su nombre :D",
  you_dont_have_friends_3: "No tienes amigos... Parecido a la realidad",
  you_dont_have_friends_4:
    "Que vacío está esto por aquí... Añade a alguien a ver si se anima",
  you_dont_have_friends_5: "No tienes amigos... ¿Quieres ser mi amigo?",
  you_dont_have_friends_6: "¿Porqué entras aquí si no tienes amigos?",
  you_dont_have_friends_7:
    "Vamos a llenar esto, dale a añadir amigos y añade a alguien",
  you_dont_have_friends_8:
    "Vaya, no tienes amigos... prueba a enviar una solicitud a alguien",

  error_detected_one:
    "Error detectado: Minecraft se ha cerrado inesperadamente. Vuelve a iniciar Minecraft.",
  error_detected_two:
    "Error detectado: Error desconocido. Vuelve a iniciar Minecraft.",
  error_detected_three:
    "Error detectado: No hay suficiente memoria RAM para iniciar Minecraft. Recuerda que puedes configurarla desde Ajustes > RAM.",
  error_detected_four:
    "Error detectado: No se ha podido parchear Forge. Vuelve a iniciar Minecraft.",
  error_detected_five:
    "Error detectado: No se ha podido iniciar Minecraft. Vuelve a iniciar Minecraft.",

  choose_fabric_version: "Selecciona una versión de Fabric",
  choose_forge_version: "Selecciona una versión de Forge",
  choose_quilt_version: "Selecciona una versión de Quilt",
  choose_optifine_version: "Selecciona una versión de OptiFine",
  choose_neoforge_version: "Selecciona una versión de NeoForge",
  choose_legacyfabric_version: "Selecciona una versión de LegacyFabric",
  choose_a_client: "Selecciona un cliente",

  starting_download_can_take:
    "Iniciando instalación... Puede tardar un poco...",
  battly_log: "Registro de Floppy",
  log: "Registro",

  start_minecraft_text: "Iniciar Minecraft",
  select_the_version_that_you_want: "Selecciona la versión que quieres abrir",
  select_a_version: "Elige una versión",

  /* logs system */
  title_access_logs: "Acceso a tus logs",
  text_access_logs:
    "Se ha solicitado acceso a tus logs de Floppy, ¿Deseas permitirlo?",
  requester: "Solicitante",
  reason: "Razón",
  text_access_logs_two:
    "Si no permites el acceso, no se podrá obtener los logs.Asegúrate que el solicitante sea de confianza.",
  allow: "Permitir",
  deny: "Denegar",
  access_logs_denied: "Se ha denegado el acceso a los logs.",
  access_logs_denied_text:
    "Si crees que estás siendo atacado, contacta con el equipo de soporte de Floppy urgentemente.",
  your_unique_id_is: "Tu ID única de Floppy es:",
  dont_share_it: "Usa esta ID para poder recibir mejor ayuda con tu problema.",
  id_copied_correctly: "Se ha copiado la ID correctamente.",
  copy: "Copiar",

  /* mods */
  return: "Volver",
  install_modpack: "Instalar ModPack",
  search_mods: "Buscar mods...",
  compatible_with_curseforge_or_modrinth:
    "Compatible con ModPacks de CurseForge o Modrinth",
  install_modpack_text: "Instalar ModPack",
  you_didnt_selected_any_file: "No has seleccionado ningún archivo",
  installing_modpack_can_take: "Instalando ModPack... Puede tardar...",
  no_description: "Sin descripción",
  installing_file: "Instalando archivo",
  modpack_installed: "ModPack instalado",
  modpack_installed_correctly: "instalado correctamente",
  installing_mod: "Instalando mod",
  the_file_is_not_compatible: "El archivo no es compatible",
  the_modpack_is_not_compatible: "El ModPack no es compatible",
  the_modpack_is_not_compatible_text:
    "Asegúrate de que sea de CurseForge o Modrinth.",
  searching_mods: "Buscando mods",
  downloading_mod: "Descargando mod",
  mod_downloaded_successfully: "descargado correctamente",
  error_downloading_mod: "Error al descargar",
  error_downloading_dependency: "Error al descargar la dependencia",
  dependency: "Dependencia",
  downloaded_successfully_two: "descargada correctamente",
  loading_mod_information: "Cargando información del mod",
  mod_information: "Información del mod",
  mod_stats: "Estadísticas del mod",
  downloads: "Descargas",
  followers: "Seguidores",
  view_on_modrinth: "Ver en Modrinth",
  download_mod: "Descargar mod",
  delete_mod: "Eliminar mod",
  mod_deleted_correctly: "Mod eliminado correctamente",
  all_this_information_copyright_modrinth:
    'Toda esta información (imágenes, nombres, descargas, archivos) provienen de la API oficial de <a href="https://modrinth.com" target="_blank">Modrinth</a>. Todos los derechos reservados.',
  deleted_successfully: "eliminado correctamente",
  the_installation_is_in_2nd_plan: "La instalación está en segundo plano",
  the_installation_is_in_2nd_plan_text:
    "Puedes seguir navegando por Floppy mientras se instala el ModPack.",
  the_installation_was_cancelled: "La instalación fue cancelada",
  the_installation_was_cancelled_text:
    "Has cancelado la instalación del ModPack.",

  checking_premium: "Comprobando si eres premium",
  account_selected: "Cuenta seleccionada",
  account_selected_text: "Cuenta",
  account_selected_text_two: "seleccionada correctamente",
  mod_activated: "Mod activado",
  mod_deactivated: "Mod desactivado",

  install: "Instalar",

  logs_saved_correctly: "Registros guardados correctamente",

  /* battly social */
  welcome_battly_social:
    "👋 Bienvenido/a al nuevo panel de amigos de Floppy. Aquí podrás ver a todos tus amigos, añadirlos, ver qué están jugando y sus estadísticas",
  friends_list_text: "Lista de amigos",
  add_friend: "Añadir amigo",
  show_requests: "Ver solicitudes",
  accept: "Aceptar",
  starting_version_can_take: "Iniciando versión... Puede tardar un poco...",
  you_dont_have_any_friend_requests: "No tienes solicitudes de amistad",
  friend_requests: "Solicitudes de amistad",
  request_accepted: "Solicitud aceptada",
  request_rejected: "Solicitud rechazada",
  search: "Buscar",
  loading_friends: "Cargando amigos",
  error_loading_friends:
    "Error al obtener la lista de amigos. Comprueba tu conexión a internet y vuelve a intentarlo más tarde.",
  in_the_main_menu: "En el menú de inicio",
  add_friend_text: "Añadir amigo",
  username: "Nombre de usuario",
  you_cannot_add_yourself: "No puedes añadirte a ti mismo como amigo.",
  you_already_have_this_friend: "Ya tienes a este usuario como amigo.",
  request_sent_to: "Solicitud enviada a",
  correctly: "correctamente",
  no_friends_online: "No tienes amigos en línea",

  /* login */
  a_microsoft_panel_opened:
    "Se ha abierto una ventana de inicio de sesión de Microsoft",
  logging_in: "Iniciando sesión",
  error_logging_in: "Error al iniciar sesión",
  set_your_username: "Ingresa tu nombre de usuario",
  threecharacters_username:
    "Tu nombre de usuario debe tener al menos 3 carácteres",
  set_your_password: "Ingresa tu contraseña",
  threecharacters_password: "Tu contraseña debe tener al menos 3 carácteres",
  username_or_password_incorrect:
    "El nombre de usuario o la contraseña son incorrectos",
  welcome_again_to_battly: "Bienvenid@ de nuevo a Floppy",
  we_hope_you_enjoy: "¡Esperamos que disfrutes de la experiencia de juego!",
  use_account_battly_or_microsoft:
    "Usa tu cuenta de Floppy o Microsoft para iniciar sesión en Floppy",
  username: "Nombre de usuario",
  password: "Contraseña",
  login_text_panel_login: "Iniciar Sesión",
  register_open_btn: "Regístrate",
  lost_your_account: "¿Olvidaste tu contraseña?",
  recover_it_here: "Recupérala aquí",
  login: "Iniciar sesión",
  you_dont_have_account: "¿No tienes cuenta?",
  account_already_exists: "Ya has iniciado sesión con esta cuenta",
  password_not_set:
    "Se ha cerrado sesión de tu cuenta. Debes iniciar sesión de nuevo para continuar.",
  login_microsoft_adv_title: "Iniciar sesión con Microsoft",
  login_microsoft_adv_text:
    "Hemos recibido muchas quejas por problemas con el inicio de sesión de Microsoft... Pero... Todos es gente que no tiene Minecraft comprado... Si tienes Minecraft comprado, puedes iniciar sesión con Microsoft sin problemas. Si no, inicia sesión con una cuenta de Floppy.",
  login_microsoft_accept: "Tengo Minecraft comprado",
  login_microsoft_cancel: "No tengo Minecraft comprado",
  no_accounts: "No tienes cuentas para jugar",
  no_accounts_message:
    "Añade una cuenta para jugar. Presiona ⚙️ > Añadir cuenta",
  logging_in: "Iniciando sesión",
  checking_if_you_are_premium: "Comprobando si eres premium",
  auth_code: "Código de autenticación",
  auth_code_not_set: "No se ha establecido el código de autenticación",
  login_with_google: "Iniciar sesión con Google",
  login_with_google_msg: "Se abrirá una ventana de Google para iniciar sesión.",
  checking_auth_code: "Comprobando código de autenticación",
  login_with_google: "Iniciar sesión con Google",
  code_login_text: "Pon el código que se te ha mostrado en el navegador",
  send: "Enviar",

  /* months */
  january: "Enero",
  february: "Febrero",
  march: "Marzo",
  april: "Abril",
  may: "Mayo",
  june: "Junio",
  july: "Julio",
  august: "Agosto",
  september: "Septiembre",
  october: "Octubre",
  november: "Noviembre",
  december: "Diciembre",

  /* music */
  you_dont_have_songs_in_your_playlist:
    "No tienes canciones en tu lista de reproducción",
  save_playlist: "Guardar",
  saved_playlists: "Playlists guardadas",
  playlist_name: "Título de la playlist",
  save: "Guardar",
  you_need_to_set_a_playlist_name: "Debes ingresar un nombre para la playlist",
  already_have_a_playlist_with_this_name:
    "Ya tienes una playlist con este nombre",
  playlist_saved_correctly: "Playlist guardada correctamente",
  welcome_to_the_new_playlists_system:
    "Bienvenid@ al nuevo panel de playlists de Floppy, aquí podrás gestionar tus playlists que habrás guardado en Floppy Music.",
  getting_songs: "Obteniendo canciones",
  getting: "Obteniendo",
  loading: "Cargando",
  thumbnail: "Miniatura",
  delete: "Eliminar",
  songs_loaded_playing: "¡Música cargada!<br>Reproduciendo",
  playlist_deleted_successfully: "Playlist eliminada correctamente",
  add: "Añadir",
  added: "Añadido",
  finded: "Encontrados",
  not_founded: "No encontrados",
  playing_now: "Reproduciendo ahora",
  your_playlist: "Tu playlist",
  no_song: "Ninguna canción",
  add_songs_to_your_playlist:
    "Añade una buscándola en el buscador de aquí abajo",
  song_name: "Nombre de la canción",
  playlists: "Playlists",
  search_song: "Buscar",
  save_playlist_text: "Guardar playlist",
  playlist_deleted_correctly: "Playlist eliminada correctamente",
  volume: "Volumen",
  mods_list_button: "Mis Mods",

  mods: "Mods",
  welcome_mods:
    "👋 Bienvenido/a al nuevo panel de mods de Floppy. Aquí podrás gestionar tus mods descargados en Floppy.",

  premium_screen_1:
    "Si estás leyendo esto es porque eres usuario Plus (premium) de Floppy (o habrás usado truquitos para ver este mensaje). <b>Ahora podrás disfrutar de todas tus ventajas en Floppy como:</b>",
  premium_screen_2: "Fondo animado en Floppy",
  premium_screen_3:
    "Exactamente, normalmente podías añadir una imagen de fondo, pero al ser premium <b>podrás añadir un fondo animado (un vídeo que se repite).</b>",
  premium_screen_4: "Skins HD + Capas Custom",
  premium_screen_5:
    "Normalmente, siendo usuario normal, sólo podías subir tu skin y elegir entre las 4 capas que te da Floppy, pero ahora <b>podrás añadir una skin HD y tu propia capa.</b>",
  premium_screen_6: "Insignia única en Floppy",
  premium_screen_7:
    'Cuando acabes de leer esto, mira tu perfil, habrá aparecido un <i class="fa-solid fa-fire"></i>, <b>eso significa que eres premium.</b>',
  premium_screen_8: "Rol en el servidor de Discord",
  premium_screen_9:
    "Si eres premium, tendrás un rol especial en el servidor de Discord de Floppy.",
  premium_screen_10: "Soporte priotirario",
  premium_screen_11:
    "Al ser premium, tendrás soporte prioritario para solucionar tus problemas de Floppy con nuestros mejores staffs.",
  premium_screen_12:
    "Floppy, siempre se está actualizando, por lo cual, con el tiempo, iremos añadiendo más ventajas para vosotros. ¡Gracias por formar parte de Floppy!",

  /* crash report */
  notification_crash_report_title: "Error al abrir Minecraft",
  notification_crash_report_text: "Consulta el error abriendo Floppy",
  thats_a_error_message:
    "Esto es un mensaje de error al iniciar Minecraft. Esto no es por culpa de Floppy, no reportar este problema.",
  error_found: "Error encontrado",
  find_solution: "Encontrar solución",
  save_logs: "Guardar logs",
  searching_solution: "Buscando solución...",
  searching_solution_taking_1:
    "Está tardando más de lo normal, por favor, espera...",
  searching_solution_taking_2: "Seguimos buscando...",
  searching_solution_taking_3:
    "Estamos teniendo problemas para encontrar una solución, por favor, intenta más tarde.",
  no_solution_found:
    "No se ha encontrado una solución a este problema. Puedes intentar buscar en Google el error que te ha dado.",
  solution_found: "¡Se ha encontrado una solución!",

  /* tooltips */
  tooltip_settings: "Ajusta las configuraciones de Floppy a tu gusto",
  tooltip_news: "Mira las últimas actualizaciones",
  tooltip_folder: "Abre la carpeta de Floppy",
  tooltip_discord: "Únete al servidor de Discord",
  tooltip_mods: "Descarga tus mods favoritos desde Floppy",
  tooltip_music: "Escucha tu música favorita cuando quieras",
  tooltip_friends: "Mira que están jugando tus amigos para unirte a ellos",
  tooptip_instances: "Separa tus mods y juega tus modpacks favoritos",
  tooptip_download: "Descarga versiones de Minecraft",
  tooltip_play: "Juega las versiones descargadas",

  /* tooltips settings */
  tooltip_accounts: "Gestiona tus cuentas de Floppy",
  tooltip_java: "Configura Java",
  tooltip_ram: "Ajusta la RAM de Minecraft",
  tooltip_launcher: "Ajusta el comportamiento de Floppy",
  tooltip_theme: "Personaliza los colores de Floppy",
  tooltip_background: "Ajusta el fondo de Floppy a tu gusto",
  tooltip_save: "Guarda las configuraciones y vuelve al menú",
};

export default strings;
