<template>
  <Button class="Button"
     @click="$emit('onClick', label)"
     :class="{double, triple, operation}">
      {{ label }}
  </Button>
</template>

<script>
export default {
  props:{
    label: {},
    operation:{type: Boolean },
    double:{ type: Boolean},
    triple: { type: Boolean},
    
  }

}
</script>

<style>

:root {
  --bg-button: #f0f0f0;
  --border-button: solid 1px #888;  

}

.Button {
  font-style: 1.4em;
  background-color: var(--bg-button);
  border: none;
  border-right: var(--border-button);
  border-bottom: var(--border-button);
  outline: none;
  align-items: center;
  }
.Button:active {
  background-color: #ccc;
  }
.Button.double {
  grid-column: span 2;
}
.Button.triple {
  grid-column: span 3;
}

.Button.operation {
  background-color: #fa8231;
  color:#fff;
}

.Button.operation:active {
  background-color: #fa8231cc;
}

</style>