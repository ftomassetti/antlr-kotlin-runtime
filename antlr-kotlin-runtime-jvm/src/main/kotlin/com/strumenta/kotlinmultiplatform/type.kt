package com.strumenta.kotlinmultiplatform

actual class Type(val javaClass: Class<*>)

actual fun Type.isInstance(any: Any?): Boolean {
    return javaClass.isInstance(any)
}

actual fun TypeDeclarator.getType(name: String) : Type {
    var container : Class<*> = this.javaClass
    var currName = name
    while (currName.startsWith("../")) {
        currName = currName.substring("../".length)
        container = container.enclosingClass!!
    }
    return Type(container.declaredClasses.find { it.simpleName == currName }!!)
}