const firstNames = [
  'Amanda', 'Dianna', 'Gianna', 'Jack', 'Tyrell', 'Sue', 'Jen', 'Hal', 'Jesus',
  'Kevin', 'Nina', 'Rose', 'Kai', 'Kaiwan', 'Fin', 'Tabatha', 'Victor', 'Moses',
  'Mads', 'Mikkel', 'Magnus', 'Raphie', 'Ariella', 'Keith', 'Emily', 'Daisy',
  'Hillary', 'Jim', 'Jasper', 'Erica', 'Tony', 'Gladia', 'Samantha', 'Olivia',
  'Riquel', 'Victor', 'Bethany', 'Andrew', 'Tarik', 'Justin', 'Dilan', 'Octavia',
  'Jane', ' Louisa', ' J.K.', 'Toni', 'Virginia', 'Margaret', 'Mary', 'Charlotte',
  'DaeShim', 'Cho', 'Chon', 'HeeWon', 'Jeong', 'Joo Mi', 'Moon', 'Shin', 'Soo'
  'Sun',
];

const lastNames = [
  'Garcia', 'Juarez', 'Fineman', 'Goldman', 'Braudy',
  'Jung', 'Lee', 'Tran', 'Ha', 'Grobchinsky', 'Chomsky', 'Bak', 'Hernandez',
  'Peterson', 'Braunsmans', 'Sagan', 'Philips', 'Rogers', 'Carters', 'Reed',
  'Church', 'Price', 'Williams', 'Murray', 'Bell', 'Morgan', 'Davies',
  'Gordon', 'Lincoln', 'Wheeler', 'Black', 'Lovelace', 'Austen', 'Rowling',
  'Alcott', 'Bronte', 'Shelley', 'Atwood', 'Hepburn', 'Dee', 'Andrews',
  'Burstyn', 'Ahn', 'An', 'Bae', 'Baik', 'Jee', 'Jeon', 'Kil', 'Kwan', 'Min',
  'Heo', 'Chon', 'Yee', 'Roe', 'Pyon', 'Rim', 'Sheem', 'Sin', 'Sohn',
];

const deliveryInstructions = [
  'Call me once out front', 'Text when you arrive',
  'Please throw it over the fence', 'Leave on porch',
  'Please do not call and just leave outside', 'Check if the lights are on',
  'Text to confirm', 'Lets sort it out over the phone', 'Call',
  'Knock on my door three times', 'Just ring doorbell',
  'Ring Doorbell and leave in front', 'Ring Doorbell, dogs are loud by friendly',
  'Please wait outside and I will come out to pick up',
];

const phoneNumbers = [
  '4154171991', '4159752020', '4152981943', '4159225150', '4157711066',
  '4159567878', '4152212299', '4158299886', '4155671220', '4159860637',
  '4156731288', '4155675799',
];

const details = [
  'I need a full list of groceries, I will text details once confirmed',
  'My medication needs to be picked up thanks :)',
  'I have a order waiting at the medical supplies store that needs pickup',
  'Just looking for a friend to paint with, over zoom of course',
  'I am wondering if some able bodied persons would be able to pick up cat food',
  'Not urgent, but would greatly appreciate coffee or fresh bread',
  'I need fresh towels. 2 bathe towels. Max 25$.',
  'Anybody have books? I am running out and can barely move.',
  'What is the meaning of life? I need fresh fruit too',
  'What about a pet salmander? I actually need just some groceries',
  'My parrot is sick and he needs an emergency vet visist at the pet hospital on Noriega.',
  'I have two terriers who would really appreciate a walk',
  'Need some groceries. Can text the details.',
  'My bathroom sink pipe burst. Out of cash and but really needs a repair',
  'I need some Rxs picked up from the Walgreens on California Street',
  'Need some general supplies', 'Just looking for someone to talk too :/',
  'I am looking for help setting up internet',
];

const addresses = [
  '2311 Broadway Street, San Francisco, CA',
  '2400 Fulton Street, San Francisco, CA',
  '245 Hyde Street, San Francisco',
  '1522 Anza St, San Francisco, CA 94118',
  '199 Castenda Ave San Francisco CA, 94116',
  '2194 45th Ave, San Francisco, CA 94116',
  '3826 Moraga St, San Francisco, CA 94122',
  '278 Jersey St, San Francisco, CA 94114',
  '855 Rhode Island St, San Francisco, CA 94107',
  '134 Valparaiso St, San Francisco, CA 94133',
  '53 Culebra Terrace, San Francisco, CA 94109',
  '2762 Union St, San Francisco, CA 94123',
  '2614 Jackson St, San Francisco, CA 94115',
  '3663 Washington St, San Francisco, CA 94118',
  '1445 Lake St, San Francisco, CA 94118',
  '1935 Lake St, San Francisco, CA 94121',
  '5428 Anza St, San Francisco, CA 94121',
  '1746 9th avenue, San Francisco CA, 94122',
  '1668 Page St, San Francisco, CA 94117',
  '349 Haight St, San Francisco, CA 94102',
  '2555 28th Ave, San Francisco, CA 94116',
  '4233 Ulloa St, San Francisco, CA 94116',
  '88 Entrada Ct, San Francisco, CA 94127',
  '1333 Silliman St, San Francisco, CA 94134',
  '320 Silliman St, San Francisco, CA 94134',
  '3285 Mission St, San Francisco, CA 94110',
  // '4798 Mission St, San Francisco, CA 94112',
  // '3951 Alemany Blvd, San Francisco, CA 94132',
  // 'Horne Ave, San Francisco, CA 94124',
  '150 Executive Park Blvd #2800, San Francisco, CA 94134',
  '696 Monterey Blvd, San Francisco, CA 94127',
  '5999 Mission St, Daly City, CA 94014',
  '2499 San Bruno Ave, San Francisco, CA 94134',
  '2894 Mission St, San Francisco, CA 94110',
  '3692 18th St, San Francisco, CA 94110',
  '1500 Church St, San Francisco, CA 94131',
  '901 Rankin St, San Francisco, CA 94124',
  '1050 26th St, San Francisco, CA 94107',
  '1299 18th St, San Francisco, CA 94107',
  '499 Illinois St, San Francisco, CA 94158',
  '1096 S Van Ness Ave, San Francisco, CA 94110',
  '974 Valencia St, San Francisco, CA 94110',
  '555 Portola Dr, San Francisco, CA 94131',
  '1091 Portola Dr, San Francisco, CA 94127',
  '225 San Leandro Way, San Francisco, CA 94127',
  '105 Aptos Ave, San Francisco, CA 94127',
  '2000 Ocean Ave, San Francisco, CA 94127',
  '850 Holloway Ave, San Francisco, CA 94112',
  '431 Capitol Ave, San Francisco, CA 94112',
  '32 Broad St, San Francisco, CA 94112',
  '655 Brotherhood Way, San Francisco, CA 94132',
  '80 Fieldcrest Dr, Daly City, CA 94015',
  '515 John Muir Dr, San Francisco, CA 94132',
  '1600 Holloway Ave, San Francisco, CA 94132',
  '77 Cambon Dr, San Francisco, CA 94132',
  '36 Garces Dr, San Francisco, CA 94132',
  '7332004, San Francisco, CA 94132',
  '1045 Sloat Blvd, San Francisco, CA 94132',
  '32 Middlefield Dr, San Francisco, CA 94132',
  '475 Lakeshore Dr, San Francisco, CA 94132',
  '251 Country Club Dr, San Francisco, CA 94132',
  '2690 46th Ave, San Francisco, CA 94116',
  '50 Cutler Ave, San Francisco, CA 94116',
  '3132 Vicente St, San Francisco, CA 94116',
  // '2218 48th Ave, San Francisco, CA 94116',
  '3045 Santiago St, San Francisco, CA 94116',
  // '3350 Taraval St, San Francisco, CA 94116',
  '2800 Taraval St, San Francisco, CA 94116',
  // '2234 40th Ave, San Francisco, CA 94116',
  '1895 41st Ave, San Francisco, CA 94122',
  // '1984 Great Hwy, San Francisco, CA 94116',
  '1775 44th Ave, San Francisco, CA 94122',
  // '3655 Lawton St, San Francisco, CA 94122',
  '4033 Judah St, San Francisco, CA 94122',
  // '3030 Judah St, San Francisco, CA 94122',
  // '2323 Irving St, San Francisco, CA 94122',
  '4401 Cabrillo St, San Francisco, CA 94121',
  '850 La Playa St, San Francisco, CA 94121',
  '4052 Balboa St, San Francisco, CA 94121',
  '4545 Anza St, San Francisco, CA 94121',
  '3199 Clement St, San Francisco, CA 94121',
  '5230 Fulton St, San Francisco, CA 94121',
  '5821 Geary Blvd, San Francisco, CA 94121',
  '211 23rd Ave, San Francisco, CA 94121',
  '1802 Balboa St, San Francisco, CA 94121',
  '3038 Fulton St, San Francisco, CA 94118',
  '798 Arguello Blvd, San Francisco, CA 94118',
  '3355 Geary Blvd, San Francisco, CA 94118',
  '607 Divisadero St, San Francisco, CA 94117',
  '1775 Fulton St, San Francisco, CA 94117',
  '563 Ruger St, San Francisco, CA 94129',
  '560 Divisadero St, San Francisco, CA 94117',
  '652 Polk St, San Francisco, CA 94102',
  '411 Hayes St, San Francisco, CA 94102',
  '672 Geary St, San Francisco, CA 94102',
  '28 6th St, San Francisco, CA 94103',
  '1222 Harrison St, San Francisco, CA 94103',
];

module.exports = {
  addresses,
  firstNames,
  lastNames,
  details,
  deliveryInstructions,
  phoneNumbers,
};

