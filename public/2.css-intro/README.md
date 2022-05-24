# Formas de incluir o CSS no html

## Inline

Inclui dentro da tag html. Deve se desencorajada pois dificulta a manutenção.

```html
<head style="...> </p>
```

## Interno

Também não é muito encorajado.

```html
<head> 
  <style>
    font-color-red {
      color: red;
    }
  </style>
</head>
```

## Externo

Melhor maneira

```html
<head> 
  <link href=".css" rel="stylesheet">
</head>
```