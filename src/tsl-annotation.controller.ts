export default class TslAnnotationQueryCtrl {

  static templateUrl = 'template/annotation.html'

  annotation: any

  constructor($scope, $injector) {
    if (!this.annotation)
      this.annotation = {}

    if (!this.annotation.query)
      this.annotation.query = ''
  }
}
