declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module "*.svg" {
  const content: any
  export default content
}

declare module "*.png" {
  const content: string
  export default content
}