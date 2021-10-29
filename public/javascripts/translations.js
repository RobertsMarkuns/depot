I18n.translations || (I18n.translations = {});
I18n.translations["en"] = I18n.extend((I18n.translations["en"] || {}), JSON.parse('{"activerecord":{"errors":{"messages":{"record_invalid":"Validation failed: %{errors}","restrict_dependent_destroy":{"has_many":"Cannot delete record because dependent %{record} exist","has_one":"Cannot delete record because a dependent %{record} exists"}}}},"carts":{"cart":{"checkout":"Checkout","empty":"Empty cart","title":"Your Cart"}},"date":{"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"formats":{"default":"%Y-%m-%d","long":"%B %d, %Y","short":"%b %d"},"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"order":["year","month","day"]},"datetime":{"distance_in_words":{"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"},"half_a_minute":"half a minute","less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"x_days":{"one":"1 day","other":"%{count} days"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"x_months":{"one":"1 month","other":"%{count} months"},"x_seconds":{"one":"1 second","other":"%{count} seconds"}},"prompts":{"day":"Day","hour":"Hour","minute":"Minute","month":"Month","second":"Seconds","year":"Year"}},"errors":{"format":"%{attribute} %{message}","messages":{"accepted":"must be accepted","blank":"can\'t be blank","confirmation":"doesn\'t match %{attribute}","empty":"can\'t be empty","equal_to":"must be equal to %{count}","even":"must be even","exclusion":"is reserved","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","inclusion":"is not included in the list","invalid":"is invalid","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","model_invalid":"Validation failed: %{errors}","not_a_number":"is not a number","not_an_integer":"must be an integer","odd":"must be odd","other_than":"must be other than %{count}","present":"must be blank","required":"must exist","taken":"has already been taken","too_long":{"one":"is too long (maximum is 1 character)","other":"is too long (maximum is %{count} characters)"},"too_short":{"one":"is too short (minimum is 1 character)","other":"is too short (minimum is %{count} characters)"},"wrong_length":{"one":"is the wrong length (should be 1 character)","other":"is the wrong length (should be %{count} characters)"}},"template":{"body":"There were problems with the following fields:","header":{"one":"1 error prohibited this %{model} from being saved","other":"%{count} errors prohibited this %{model} from being saved"}}},"helpers":{"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","submit":"Save %{model}","update":"Update %{model}"}},"layouts":{"application":{"contact":"Contact","home":"Home","news":"News","questions":"Questions","title":"The Pragmatic Bookshelf"}},"line_items":{"line_item":{"remove":"Remove line item"}},"number":{"currency":{"format":{"delimiter":",","format":"%u%n","precision":2,"separator":".","significant":false,"strip_insignificant_zeros":false,"unit":"$"}},"format":{"delimiter":",","precision":3,"round_mode":"default","separator":".","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":"Billion","million":"Million","quadrillion":"Quadrillion","thousand":"Thousand","trillion":"Trillion","unit":""}},"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"eb":"EB","gb":"GB","kb":"KB","mb":"MB","pb":"PB","tb":"TB"}}},"nth":{},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}}},"orders":{"form":{"address_html":"Address","check_pay_type":{"account_number":"Account #","routing_number":"Routing #"},"credit_card_pay_type":{"cc_number":"CC #","expiration_date":"Expiry"},"email":"E-mail","name":"Name","pay_prompt_html":"Select a payment method","pay_type":"Pay with","pay_types":{"check":"Check","credit_card":"Credit Card","purchase_order":"Purchase Order"},"purchase_order_pay_type":{"po_number":"PO #"},"submit":"Place Order"},"new":{"legend":"Please Enter Your Details"}},"store":{"index":{"add_html":"Add to Cart","title_html":"Your Pragmatic Catalog"}},"support":{"array":{"last_word_connector":", and ","two_words_connector":" and ","words_connector":", "}},"thanks":"Thank you for your order","time":{"am":"am","formats":{"default":"%a, %d %b %Y %H:%M:%S %z","long":"%B %d, %Y %H:%M","short":"%d %b %H:%M"},"pm":"pm"}}'));
I18n.translations["es"] = I18n.extend((I18n.translations["es"] || {}), JSON.parse('{"activerecord":{"errors":{"messages":{"blank":"no puede quedar en blanco","inclusion":"no est\\u0026aacute; incluido en la lista"}}},"carts":{"cart":{"checkout":"Comprar","empty":"Vaciar Carrito","title":"Carrito de la Compra"}},"errors":{"template":{"body":"Hay problemas con los siguientes campos:","header":{"one":"1 error ha impedido que este %{model} se guarde","other":"%{count} errores han impedido que este %{model} se guarde"}}},"layouts":{"application":{"contact":"Contacto","home":"Inicio","news":"Noticias","questions":"Preguntas","title":"Biblioteca de Pragmatic"}},"line_items":{"line_item":{"remove":"Eliminar línea de pedido"}},"number":{"currency":{"format":{"delimiter":".","format":"%n\\u0026nbsp;%u","precision":2,"separator":",","unit":"$US"}}},"orders":{"form":{"address_html":"Direcci\\u0026oacute;n","check_pay_type":{"account_number":"# de Cuenta","routing_number":"# de Enrutamiento"},"credit_card_pay_type":{"cc_number":"NÃºmero","expiration_date":"ExpiraciÃ³n"},"email":"E-mail","name":"Nombre","pay_prompt_html":"Seleccione un mÃ©todo de pago","pay_type":"Forma de pago","pay_types":{"check":"Cheque","credit_card":"Tarjeta de CrÃ©dito","purchase_order":"Orden de Compra"},"purchase_order_pay_type":{"po_number":"NÃºmero"},"submit":"Realizar Pedido"},"new":{"legend":"Por favor, introduzca sus datos"}},"store":{"index":{"add_html":"A\\u0026ntilde;adir al Carrito","title_html":"Su Cat\\u0026aacute;logo de Pragmatic"}},"thanks":"Gracias por su pedido"}'));
I18n.translations["lv"] = I18n.extend((I18n.translations["lv"] || {}), JSON.parse('{"carts":{"cart":{"checkout":"Iegādāties","empty":"Iztukšot grozu","title":"Jūsu grozs"}},"errors":{"template":{"body":"Radās problēmas ar šādiem laukiem:","header":{"one":"1 kļūda aizliedza saglabāt šo %{model}","other":"%{count} kļūdas neļāva saglabāt šo %{model}"}}},"layouts":{"application":{"contact":"Kontakti","home":"Sākuma lapa","news":"Ziņas","questions":"Jautājumi","title":"Pragmatiskais grāmatu plaukts"}},"line_items":{"line_item":{"remove":"Izņemt produktu"}},"number":{"currency":{"format":{"delimiter":",","format":"%n\\u0026nbsp;%u","precision":2,"separator":".","unit":"$US"}}},"orders":{"form":{"address_html":"Adrese","email":"E-pasts","name":"Vārds","pay_prompt_html":"Izvēlieties maksājuma veidu","pay_type":"Maksājiet ar","submit":"Pasūtīt"},"new":{"legend":"Lūdzu, ievadiet savu informāciju"},"pay_types":{"account_number":"Konts #","cc_number":"CC #","check":"Čeks","check_pay_type":null,"credit_card":"Kredītkarte","credit_card_pay_type":null,"expiration_date":"Derīguma termiņš","po_number":"PO #","purchase_order":"Pirkuma pasūtījums","purchase_order_pay_type":null,"routing_number":"Maršruta Nr."},"thanks":"Paldies par jūsu pasutījumu"},"store":{"index":{"add_html":"Pievienot grozam","title_html":"Jūsu pragmatiskais katalogs"}}}'));
