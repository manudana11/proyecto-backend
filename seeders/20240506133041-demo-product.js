'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Products', [
      {
      name: "DarkSpeed LS",
      price: 549,
      brand: "Cobra",
      description: "Perfil altamente aerodinámico combinado con un diseño de cabezal de lanzamiento bajo y bajo spin",
      stock: 15,
      reference: 727057321,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "DarkSpeed LS",
      price: 549,
      brand: "Cobra",
      description: "Perfil altamente aerodinámico combinado con un diseño de cabezal de lanzamiento bajo y bajo spin",
      stock: 15,
      reference: 987654325,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "SwiftSpeed XL",
      price: 399,
      brand: "TaylorMade",
      description: "Diseño de cabeza de mayor tamaño para mayor perdón y distancia",
      stock: 20,
      reference: 123456789,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Velocity Pro",
      price: 299,
      brand: "Callaway",
      description: "Construcción de titanio para mayor velocidad de bola y distancia",
      stock: 25,
      reference: 246810975,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "LaunchMaster Plus",
      price: 599,
      brand: "Titleist",
      description: "Tecnología de lanzamiento ajustable para control de trayectoria",
      stock: 10,
      reference: 135792467,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "PowerDrive 2000",
      price: 449,
      brand: "Ping",
      description: "Cabezal de alto MOI para mayor estabilidad y perdón",
      stock: 18,
      reference:58,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "ForgedBlade Pro",
      price: 799,
      brand: "Mizuno",
      description: "Hierros forjados para mayor sensación y control",
      stock: 12,
      reference: 147258369,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "DistanceMaster 300",
      price: 499,
      brand: "Titleist",
      description: "Hierros de distancia con tecnología de inserción de polímero",
      stock: 20,
      reference: 159751268,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "SpeedBlade",
      price: 349,
      brand: "TaylorMade",
      description: "Hierros con cara delgada para mayor velocidad de bola",
      stock: 22,
      reference: 246801352,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "ForgedCavity",
      price: 649,
      brand: "Ping",
      description: "Hierros forjados con cavidad trasera para mayor perdón",
      stock: 15,
      reference: 789123456,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "TourXp",
      price: 899,
      brand: "Callaway",
      description: "Hierros de gira con diseño de cuello delgado y cabezal compacto",
      stock: 8,
      reference: 987654321,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "FireBall X2",
      price: 349,
      brand: "Titleist",
      description: "Madera de calle con cara de titanio y tecnología de vuelo optimizado",
      stock: 18,
      reference: 123456781,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "SwiftStrike",
      price: 299,
      brand: "TaylorMade",
      description: "Diseño de peso ajustable para mayor versatilidad y control",
      stock: 25,
      reference: 987656321,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "LaunchMaster V3",
      price: 399,
      brand: "Callaway",
      description: "Tecnología de lanzamiento ajustable para una trayectoria óptima",
      stock: 15,
      reference: 369852158,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "UltraSpeed FW",
      price: 279,
      brand: "Cobra",
      description: "Madera de calle con diseño de peso ligero para mayor velocidad de cabeza",
      stock: 20,
      reference: 246801358,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "PrecisionWood",
      price: 449,
      brand: "Ping",
      description: "Madera de calle con diseño de perfil bajo para un vuelo controlado",
      stock: 15,
      reference: 159753441,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "SpinMaster Pro",
      price: 149,
      brand: "Titleist",
      description: "Wedge de alta rotación para control de distancia y spin",
      stock: 25,
      reference: 987654322,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "LaunchControl X",
      price: 179,
      brand: "Cleveland",
      description: "Wedge con tecnología de peso perimetral para mayor estabilidad",
      stock: 20,
      reference: 123457789,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "GripMaster Plus",
      price: 29,
      brand: "GolfPride",
      description: "Agarre de alta calidad para mayor comodidad y control",
      stock: 50,
      reference: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "RangeFinder 2000",
      price: 199,
      brand: "Bushnell",
      description: "Telémetro láser con precisión de 1 yarda y tecnología de bloqueo de bandera",
      stock: 15,
      reference: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "TourPro 2024",
      price: 49,
      brand: "Titleist",
      description: "Bola de gira con cubierta de uretano para un control excepcional",
      stock: 100,
      reference: 369852197,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "DistanceMaster Pro",
      price: 29,
      brand: "Callaway",
      description: "Bola de distancia con núcleo de alta energía para mayor velocidad de bola",
      stock: 150,
      reference:41,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
