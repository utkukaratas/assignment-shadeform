import { z } from "zod";

export const CreateRequestSchema = z.object({
  cloud: z.string(),
  region: z.string(),
  shade_instance_type: z.string(),
  shade_cloud: z.boolean(),
  name: z.string(),
  launch_configuration: z.object({
    type: z.string(),
    docker_configuration: z.object({
      image: z.string(),
      args: z.string(),
      shared_memory_in_gb: z.number(),
      envs: z.array(z.object({ name: z.string(), value: z.string() })),
      port_mappings: z.array(
        z.object({ host_port: z.number(), container_port: z.number() })
      ),
      volume_mounts: z.array(
        z.object({ host_path: z.string(), container_path: z.string() })
      ),
    }),
    script_configuration: z.object({ base64_script: z.string() }),
  }).optional(),
  os: z.string().optional(),
});

export type ICreateRequest = z.infer<typeof CreateRequestSchema>;

export const CreateResponseSchema = z.object({
  id: z.string(),
  cloud_assigned_id: z.string(),
});

export type ICreateResponse = z.infer<typeof CreateResponseSchema>;

export const InfoResponseSchema = z.object({
  id: z.string(),
  cloud: z.string(),
  region: z.string(),
  shade_instance_type: z.string(),
  cloud_instance_type: z.string(),
  cloud_assigned_id: z.string(),
  shade_cloud: z.boolean(),
  name: z.string(),
  configuration: z.object({
    memory_in_gb: z.number(),
    storage_in_gb: z.number(),
    vcpus: z.number(),
    num_gpus: z.number(),
    gpu_type: z.string(),
    interconnect: z.string(),
    vram_per_gpu_in_gb: z.number(),
    os: z.string(),
  }),
  ip: z.string(),
  ssh_user: z.string(),
  ssh_port: z.number(),
  status: z.string(),
  cost_estimate: z.string(),
  hourly_price: z.number(),
  launch_configuration: z.object({
    type: z.string(),
    docker_configuration: z.object({
      image: z.string(),
      args: z.string(),
      shared_memory_in_gb: z.number(),
      envs: z.array(z.object({ name: z.string(), value: z.string() })),
      port_mappings: z.array(
        z.object({ host_port: z.number(), container_port: z.number() })
      ),
      volume_mounts: z.array(
        z.object({ host_path: z.string(), container_path: z.string() })
      ),
    }),
    script_configuration: z.object({ base64_script: z.string() }),
  }),
  created_at: z.string(),
  deleted_at: z.string(),
});

export type IInfoResponse = z.infer<typeof InfoResponseSchema>;

export const TypesResponseSchema = z.object({
  instance_types: z.array(
    z.object({
      cloud: z.string(),
      region: z.string(),
      shade_instance_type: z.string(),
      cloud_instance_type: z.string(),
      configuration: z.object({
        memory_in_gb: z.number(),
        storage_in_gb: z.number(),
        vcpus: z.number(),
        num_gpus: z.number(),
        gpu_type: z.string(),
        interconnect: z.string(),
        vram_per_gpu_in_gb: z.number(),
        os_options: z.array(z.string()),
      }),
      hourly_price: z.number(),
      availability: z.array(
        z.object({ region: z.string(), available: z.boolean() })
      ),
    })
  ),
});

export type ITypesResponse = z.infer<typeof TypesResponseSchema>;

export const InstancesResponseSchema = z.object({
  instances: z.array(
    z.object({
      id: z.string(),
      cloud: z.string(),
      region: z.string(),
      shade_instance_type: z.string(),
      cloud_instance_type: z.string(),
      cloud_assigned_id: z.string(),
      shade_cloud: z.boolean(),
      name: z.string(),
      configuration: z.object({
        memory_in_gb: z.number(),
        storage_in_gb: z.number(),
        vcpus: z.number(),
        num_gpus: z.number(),
        gpu_type: z.string(),
        interconnect: z.string(),
        vram_per_gpu_in_gb: z.number(),
        os: z.string(),
      }),
      ip: z.string(),
      ssh_user: z.string(),
      ssh_port: z.number(),
      status: z.string(),
      cost_estimate: z.string(),
      hourly_price: z.number(),
      launch_configuration: z.object({
        type: z.string(),
        docker_configuration: z.object({
          image: z.string(),
          args: z.string(),
          shared_memory_in_gb: z.number(),
          envs: z.array(z.object({ name: z.string(), value: z.string() })),
          port_mappings: z.array(
            z.object({ host_port: z.number(), container_port: z.number() })
          ),
          volume_mounts: z.array(
            z.object({ host_path: z.string(), container_path: z.string() })
          ),
        }),
        script_configuration: z.object({ base64_script: z.string() }),
      }),
      created_at: z.string(),
      deleted_at: z.string(),
    })
  ),
});

export type IInstancesResponse = z.infer<typeof InstancesResponseSchema>;

export const IdParamSchema = z.number()
