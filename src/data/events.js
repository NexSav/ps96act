// School Events Data
const events = [
  // October 2025 Events
  {
    id: 'oct-1-2025',
    title: 'Happy Spooky Season',
    titleES: 'Feliz Temporada Espeluznante',
    date: new Date(2025, 9, 1),
    category: 'holiday',
    allDay: true,
    description: 'Welcome to October - Happy Spooky Season!',
    descriptionES: '¡Bienvenido a octubre - Feliz Temporada Espeluznante!'
  },
  {
    id: 'oct-2-2025',
    title: 'School Closed - Yom Kippur',
    titleES: 'Escuela Cerrada - Yom Kipur',
    date: new Date(2025, 9, 2),
    category: 'holiday',
    allDay: true,
    description: 'No school - Yom Kippur observance',
    descriptionES: 'No hay clases - Observancia de Yom Kipur'
  },
  {
    id: 'oct-6-2025-transport',
    title: 'Transportation Orientation & NYC Schools Account Sign-Up Support',
    titleES: 'Orientación de Transporte y Soporte para Cuenta de Escuelas de NYC',
    date: new Date(2025, 9, 6),
    category: 'academic',
    startTime: '8:30 AM',
    description: 'Morning session for transportation orientation and assistance with NYC Schools Account setup',
    descriptionES: 'Sesión matutina para orientación de transporte y asistencia con la configuración de la cuenta de Escuelas de NYC'
  },
  {
    id: 'oct-7-2025-food',
    title: 'Food Pantry',
    titleES: 'Despensa de Alimentos',
    date: new Date(2025, 9, 7),
    category: 'community',
    startTime: '2:30 PM',
    description: 'Monthly food pantry distribution for families in need',
    descriptionES: 'Distribución mensual de despensa de alimentos para familias necesitadas'
  },
  {
    id: 'oct-9-2025-bingo',
    title: 'Family Bingo Night',
    titleES: 'Noche de Bingo Familiar',
    date: new Date(2025, 9, 9),
    category: 'pta',
    startTime: '5:30 PM',
    description: 'Join us for a fun family bingo night!',
    descriptionES: '¡Únase a nosotros para una divertida noche de bingo familiar!'
  },
  {
    id: 'oct-10-2025-global',
    title: 'Global Kids Perfect Attendance Breakfast',
    titleES: 'Desayuno de Asistencia Perfecta de Global Kids',
    date: new Date(2025, 9, 10),
    category: 'academic',
    description: 'Celebrating students with perfect attendance',
    descriptionES: 'Celebrando a los estudiantes con asistencia perfecta'
  },
  {
    id: 'oct-10-2025-mental',
    title: 'Wear Yellow for National Mental Health Day',
    titleES: 'Use Amarillo para el Día Nacional de la Salud Mental',
    date: new Date(2025, 9, 10),
    category: 'community',
    allDay: true,
    description: 'Show support for mental health awareness by wearing yellow',
    descriptionES: 'Muestre su apoyo a la conciencia sobre la salud mental usando amarillo'
  },
  {
    id: 'oct-10-2025-workshop',
    title: 'Mindful Crafting Workshop',
    titleES: 'Taller de Artesanía Consciente',
    date: new Date(2025, 9, 10),
    category: 'afterSchool',
    startTime: '3:30 PM',
    description: 'Creative mindfulness workshop for students',
    descriptionES: 'Taller creativo de mindfulness para estudiantes'
  },
  {
    id: 'oct-13-2025',
    title: 'School Closed - Indigenous Peoples Day',
    titleES: 'Escuela Cerrada - Día de los Pueblos Indígenas',
    date: new Date(2025, 9, 13),
    category: 'holiday',
    allDay: true,
    description: 'No school in observance of Indigenous Peoples Day',
    descriptionES: 'No hay clases en observancia del Día de los Pueblos Indígenas'
  },
  {
    id: 'oct-14-2025-food',
    title: 'Food Pantry',
    titleES: 'Despensa de Alimentos',
    date: new Date(2025, 9, 14),
    category: 'community',
    startTime: '2:30 PM',
    description: 'Monthly food pantry distribution for families in need',
    descriptionES: 'Distribución mensual de despensa de alimentos para familias necesitadas'
  },
  {
    id: 'oct-15-2025-pa',
    title: 'Parent Association Virtual Meeting',
    titleES: 'Reunión Virtual de la Asociación de Padres',
    date: new Date(2025, 9, 15),
    category: 'pta',
    startTime: '7:00 PM',
    description: 'Monthly Parent Association virtual meeting',
    descriptionES: 'Reunión virtual mensual de la Asociación de Padres'
  },
  {
    id: 'oct-16-2025-breast',
    title: 'Wear Pink for Breast Cancer Awareness',
    titleES: 'Use Rosa para la Concienciación del Cáncer de Mama',
    date: new Date(2025, 9, 16),
    category: 'community',
    allDay: true,
    description: 'Support breast cancer awareness by wearing pink',
    descriptionES: 'Apoye la concienciación del cáncer de mama usando rosa'
  },
  {
    id: 'oct-16-2025-bingo',
    title: 'Family Bingo Night',
    titleES: 'Noche de Bingo Familiar',
    date: new Date(2025, 9, 16),
    category: 'pta',
    startTime: '5:30 PM',
    description: 'Join us for a fun family bingo night!',
    descriptionES: '¡Únase a nosotros para una divertida noche de bingo familiar!'
  },
  {
    id: 'oct-17-2025-coffee',
    title: 'Coffee on the Curb',
    titleES: 'Café en la Acera',
    date: new Date(2025, 9, 17),
    category: 'community',
    startTime: '8:45 AM',
    description: 'Morning coffee social for parents and guardians',
    descriptionES: 'Reunión social matutina de café para padres y tutores'
  },
  {
    id: 'oct-17-2025-workshop',
    title: 'Mindful Crafting Workshop',
    titleES: 'Taller de Artesanía Consciente',
    date: new Date(2025, 9, 17),
    category: 'afterSchool',
    startTime: '3:30 PM',
    description: 'Creative mindfulness workshop for students',
    descriptionES: 'Taller creativo de mindfulness para estudiantes'
  },
  {
    id: 'oct-20-2025',
    title: 'School Closed - Diwali',
    titleES: 'Escuela Cerrada - Diwali',
    date: new Date(2025, 9, 20),
    category: 'holiday',
    allDay: true,
    description: 'No school in observance of Diwali',
    descriptionES: 'No hay clases en observancia de Diwali'
  },
  {
    id: 'oct-21-2025-food',
    title: 'Food Pantry',
    titleES: 'Despensa de Alimentos',
    date: new Date(2025, 9, 21),
    category: 'community',
    startTime: '2:30 PM',
    description: 'Monthly food pantry distribution for families in need',
    descriptionES: 'Distribución mensual de despensa de alimentos para familias necesitadas'
  },
  {
    id: 'oct-23-2025-bingo',
    title: 'Family Bingo Night',
    titleES: 'Noche de Bingo Familiar',
    date: new Date(2025, 9, 23),
    category: 'pta',
    startTime: '5:30 PM',
    description: 'Join us for a fun family bingo night!',
    descriptionES: '¡Únase a nosotros para una divertida noche de bingo familiar!'
  },
  {
    id: 'oct-24-2025-hispanic',
    title: 'Hispanic Heritage Showcase',
    titleES: 'Exhibición del Patrimonio Hispano',
    date: new Date(2025, 9, 24),
    category: 'academic',
    startTime: '9:00 AM',
    description: 'Celebrating Hispanic Heritage Month with student performances and presentations',
    descriptionES: 'Celebrando el Mes de la Herencia Hispana con presentaciones y actuaciones estudiantiles'
  },
  {
    id: 'oct-24-2025-workshop',
    title: 'Mindful Crafting Workshop',
    titleES: 'Taller de Artesanía Consciente',
    date: new Date(2025, 9, 24),
    category: 'afterSchool',
    startTime: '3:30 PM',
    description: 'Creative mindfulness workshop for students',
    descriptionES: 'Taller creativo de mindfulness para estudiantes'
  },
  {
    id: 'oct-27-2025-bake',
    title: 'School Bake Sale - All Week During Lunch',
    titleES: 'Venta de Pasteles de la Escuela - Toda la Semana Durante el Almuerzo',
    date: new Date(2025, 9, 27),
    category: 'pta',
    description: 'Support our school with bake sale purchases all week during lunch',
    descriptionES: 'Apoye a nuestra escuela con compras de venta de pasteles toda la semana durante el almuerzo'
  },
  {
    id: 'oct-28-2025-heritage',
    title: 'Hispanic Heritage Family Celebration Dinner',
    titleES: 'Cena de Celebración Familiar de la Herencia Hispana',
    date: new Date(2025, 9, 28),
    category: 'community',
    startTime: '5:00 PM',
    description: 'Join us for a special family dinner celebrating Hispanic Heritage',
    descriptionES: 'Únase a nosotros para una cena familiar especial celebrando la Herencia Hispana'
  },
  {
    id: 'oct-29-2025-kpop-k2',
    title: 'Grades K-2: K-Pop Demon Hunters Watch Party',
    titleES: 'Grados K-2: Fiesta de Visualización de K-Pop Demon Hunters',
    date: new Date(2025, 9, 29),
    category: 'afterSchool',
    startTime: '3:00 PM',
    description: 'Special watch party for grades K-2',
    descriptionES: 'Fiesta de visualización especial para grados K-2'
  },
  {
    id: 'oct-30-2025-kpop-36',
    title: 'Grades 3K-6: K-Pop Demon Hunters Watch Party',
    titleES: 'Grados 3K-6: Fiesta de Visualización de K-Pop Demon Hunters',
    date: new Date(2025, 9, 30),
    category: 'afterSchool',
    startTime: '3:00 PM',
    description: 'Special watch party for grades 3K-6',
    descriptionES: 'Fiesta de visualización especial para grados 3K-6'
  },
  {
    id: 'oct-31-2025-halloween',
    title: 'Grades 3K-5: Halloween Parade',
    titleES: 'Grados 3K-5: Desfile de Halloween',
    date: new Date(2025, 9, 31),
    category: 'community',
    startTime: '1:45 PM',
    description: 'Annual Halloween costume parade for elementary students',
    descriptionES: 'Desfile anual de disfraces de Halloween para estudiantes de primaria'
  },
  {
    id: 'oct-19-2025-breast-walk',
    title: 'Making Strides Against Breast Cancer Walk in Central Park',
    titleES: 'Caminata Avanzando Contra el Cáncer de Mama en Central Park',
    date: new Date(2025, 9, 19),
    category: 'community',
    startTime: '8:00 AM',
    location: 'Central Park - Meet at Naumburg Bandshell: W 67th St & Central Park West',
    description: 'Join the PS 96 community for the Making Strides Against Breast Cancer Walk',
    descriptionES: 'Únase a la comunidad de PS 96 para la Caminata Avanzando Contra el Cáncer de Mama'
  }
];

export default events;
