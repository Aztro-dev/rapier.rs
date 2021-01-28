module.exports = {
  docs: [
    'about_rapier',
    {
      'User Guides': [
        {
          'Rust': [
            'user_guides/rust/getting_started',
            'user_guides/rust/rigid_body_simulation',
            'user_guides/rust/joint_constraints',
            'user_guides/rust/event_handling_and_sensors',
            'user_guides/rust/integration_parameters',
            'user_guides/rust/conclusion'
          ],
          'Rust Bevy Plugin': [
            'user_guides/rust_bevy_plugin/getting_started',
            'user_guides/rust_bevy_plugin/the_rapier_physics_plugin',
            'user_guides/rust_bevy_plugin/the_rapier_debug_renderer'
          ],
          'JavaScript': [
            'user_guides/javascript/getting_started',
            'user_guides/javascript/rigid_body_simulation',
            'user_guides/javascript/physics_event_handling'
          ],
        }],
    },
    {
      'API Documentation': [
          'api/javascript/JavaScript2D',
        'api/javascript/JavaScript3D',
        {
          type: 'link',
          label: 'Rust 2D ↪',
          href: 'https://docs.rs/rapier2d'
        },
        {
          type: 'link',
          label: 'Rust 3D ↪',
          href: 'https://docs.rs/rapier3d'
        },
      ],
    }
  ],
};
