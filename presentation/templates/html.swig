<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width initial-scale=1 user-scalable=no" />
  <title>{{ name }}</title>

  <!-- fonts -->
  {% for font in metadata.fonts %}<link href="{{ font }}" rel="stylesheet" type="text/css">
  {% endfor %}


  <!-- styles -->
  {% for style in metadata.styles %}<link rel="stylesheet"
  type="text/css" href="{{ style }}">
  {% endfor %}
</head>
<body>
  <div id="root"></div>
  <script src="./dist/bundle.js"></script>
</body>
</html>
